'use client'

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm, } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";
import { Result } from "postcss";



const Form = () => {
    const {conversationId} = useConversation();
    const {
        register,
        handleSubmit,
        setValue,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            message:''
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
        setValue('messages','',{shouldValidate:true});
        axios.post('/api/messages',{
            ...data,conversationId
        })
    }

    const handleUpLoad = (result:any)=>{
        axios.post('/api/messages',{
            image: result?.info?.secure_url,
            conversationId
        })
    }
    return (
        <div className="
            px-4
            py-4
            bg-white
            border-t
            flex
            items-center
            gap-2
            lg:gap-4
            w-full
        ">
            <CldUploadButton options={{ maxFiles: 2 }} onUpload={handleUpLoad} uploadPreset="ei7qutah">
                <HiPhoto size={30} className = "text-pink-500"/>
            </CldUploadButton>
            <form onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-2 lg:gap-4 w-full">
                        <MessageInput 
                            id = 'message'
                            register = {register}
                            errors = {errors}
                            required
                            placeholder = "Write a message"
                            

                        />
                        <button type="submit" className="rounded-full p-2 bg-pink-500 cursor-pointer hover:bg-pink-600 transition">
                            <HiPaperAirplane size = {18} className="text-white"/> 
                        </button>
                    </form>
        </div>
    );
};

export default Form;