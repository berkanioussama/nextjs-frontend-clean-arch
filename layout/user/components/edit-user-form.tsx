'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/layout/shared/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema, NewUser } from "@/domain/user/user.entity";
import { Input } from "@/layout/shared/components/ui/input";
import { Button } from "@/layout/shared/components/ui/button";
import { User } from "@/domain/user/user.entity";
import { toast } from "sonner"
import { useEditUser } from "@/layout/user/hooks/use-edit-user.hook";

const EditUserForm = ({user}: {user: User}) => {
    const { mutate: EditUser, isPending } = useEditUser();

    const form = useForm<NewUser>({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            name: user.name,
            authProviderId: user.authProviderId,
            email: user.email,
            image: user.image,
        },
    })

    function onSubmit(values: NewUser) {
        EditUser({ userId: user.id, user: values}, {
            onSuccess: (data) => {
                toast.success("User has been updated", {
                    description: `User ${data?.name} has been updated successfully`,
                })
                form.reset({
                    name: data?.name,
                    authProviderId: data?.authProviderId,
                    email: data?.email,
                    image: data?.image,
                });
            },
            onError: (error) => {
                toast.error("Failed to update user", {
                    description: error.message || "Please try again later."
                });
            }
        });
    }

    const inputs: { field: keyof NewUser; name: string; placeHolder: string; type: string }[] = [
        { field: 'name', name: 'Name', placeHolder: 'Your full name', type: 'text' },
        { field: 'authProviderId', name: 'Auth Provider ID', placeHolder: 'Your auth provider ID', type: 'text' },
        { field: 'email', name: 'Email', placeHolder: 'Your email', type: 'email' },
        { field: 'image', name: 'Image URL', placeHolder: 'Your image URL', type: 'text' }
    ]

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {inputs.map((input) => (
                    <FormField key={input.field} control={form.control} name={input.field} render={({ field }) => (
                        <FormItem>
                            <FormLabel>{input.name}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={input.placeHolder} type={input.type} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                ))}

                <Button type="submit">{isPending ? 'Updating...' : 'Update User'}</Button>
            </form>
        </Form>
    );
}
 
export default EditUserForm;