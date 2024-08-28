'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserData, removeUserData } from "@/service/saveData";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import testPhoto from "@/../public/img/test-image.jpeg"
import { MdDeleteSweep } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

export default function Profile() {

    const router = useRouter();

    const data = getUserData();

    console.log(data);

    const date = data.cratedAt;
    const subDate = date.substring(0, 10);

    if (!data) {
        router.push("/Login");
    }

    return (
        <div className="mx-32 my-12 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-4">
            <div className="flex flex-col items-center gap-6 bg-gray-200 shadow-md dark:bg-gray-600 p-6">
                <Avatar className="w-36 h-36">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="font-semibold text-3xl dark:text-gray-200 text-center">{data.name}</h1>
                <div className="flex gap-1">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" className="!bg-red-700 !text-white !border-none">Sair</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Confirmar Saída</AlertDialogTitle>
                                <AlertDialogDescription>Vai sair mesmo seu merda?</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction className="!bg-red-700 !text-white" onClick={() => {
                                    removeUserData();
                                    router.push("/Login");
                                }}>
                                    Sair
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" className="!bg-indigo-800 !text-white !border-none">Alterar Foto</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Alterar Foto de Perfil</AlertDialogTitle>
                                <AlertDialogDescription>Bota uma foto muito pika</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction asChild>
                                    <Input className="dark" type="file" />
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            <div className="bg-gray-200 shadow-md dark:bg-gray-600 p-6 flex flex-col">
                <h1 className="font-semibold text-3xl dark:text-gray-200">Suas Informações</h1>
                <span className="text-gray-300 mt-2">Nome</span>
                <h1>{data.name}</h1>
                <span className="text-gray-300 mt-2">Email</span>
                <h1>{data.email}</h1>
                <span className="text-gray-300 mt-2">Número de albúns</span>
                <h1>4</h1>
                <span className="text-gray-300 mt-2">Entrou em</span>
                <h1>{subDate}</h1>
            </div>
            <div className="bg-gray-200 shadow-md dark:bg-gray-600 lg:col-span-2 p-6 flex flex-col gap-3">
                <h1 className="font-semibold text-3xl dark:text-gray-200">Seus Albuns</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image width={80} height={80} src={testPhoto} alt=""></Image>
                        <div>
                            <h1>Abbey Road</h1>
                            <span className="text-gray-300">2020</span>
                        </div>
                    </div>
                    <Button>Ver datalhes</Button>
                    <MdDeleteSweep size={40} />
                </div>
                <Separator className="!bg-white" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image width={80} height={80} src={testPhoto} alt=""></Image>
                        <div>
                            <h1>Abbey Road</h1>
                            <span className="text-gray-300">2020</span>
                        </div>
                    </div>
                    <Button>Ver datalhes</Button>
                    <MdDeleteSweep size={40} />
                </div>
            </div>
        </div>
    )
}