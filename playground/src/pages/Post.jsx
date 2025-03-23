import React, { useState } from "react";
import * as Yup from "yup";
import Section from "../components/Section";
import InputField from "../components/InputField";

const fields = {
  title: "",
  body: "",
};

function Post() {
  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required(),
  });

  const onChange = async (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    await validate();
  };

  const validate = async () => {
    return schema
      .validate(form, { abortEarly: false })
      .then(() => true)
      .catch((e) => {
        e.inner.map((value) => {
          setErrors((prev) => ({
            ...prev,
            [value.path]: value.message,
          }));
        });

        return false;
      });
  };

  const submit = async () => {
    const validated = await validate();

    console.log(validated);
    console.log(errors)

    // alert(JSON.stringify(form));
  };

  return (
    <>
      <Section title="Post">
        <div className="pt-3">
          <InputField name={`title`} label={`Title`} onChange={onChange} errors={errors} />
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="body"
            placeholder="Enter your message"
            rows="4"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
            onClick={submit}
          >
            Post
          </button>
        </div>
      </Section>
    </>
  );
}

export default Post;
