import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import type { Cabin } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

type FormValues = Omit<Cabin, "image"> & {
  image: FileList;
};

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } =
    useForm<FormValues>();
  const { errors } = formState;
  const queryClient = useQueryClient();
  console.log(errors);

  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data: FormValues) {
    mutate({ ...data, image: data.image[0] });
  }

  // function onError(errors: FieldErrors<Cabin>) {
  //   console.log(errors);
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message} id="name">
        <Input
          type="text"
          id="name"
          disabled={isPending}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        error={errors?.maxCapacity?.message}
        id="maxCapacity"
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isPending}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={errors.regularPrice?.message}
        id="regularPrice"
      >
        <Input
          type="number"
          id="regularPrice"
          disabled={isPending}
          {...register("regularPrice", {
            required: "This field is required",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors.discount?.message} id="discount">
        <Input
          type="number"
          id="discount"
          disabled={isPending}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            valueAsNumber: true,
            validate: (value) =>
              Number(value) <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
        id="description"
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isPending}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" id="image">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
