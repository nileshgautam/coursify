import React,{useContext} from "react";
import { CoursifyContext } from "../../context/CoursifyContext";
import { Formik } from "formik";
import SubmitButton from "../Burron/SubmitButton";
import FormField from "../FormField/FormField";
import MySelect from "../CourseDDL/Select";
import Dropdown from "../Dropdown/Dropdown";

const ModuleLectureForm = ({ modulelecture = {}, handleSubmit }) => {
  const { courses } = useContext(CoursifyContext);

  return (
    <div>
      <p className="heading5 bold mb-5">Add Course module lectures </p>
      <div>
        <Formik
          initialValues={{
            title: "",
            courseId: "",
            moduleId: "",
            thumbnail:"",
            video:"",
         
          }}
          validate={(values) => {
            const errors = {};
            if (!values.courseId) {
              errors.courseId = "Required";
            }
            if (!values.title) {
              errors.title = "Required";
            }
            return errors;
          }}

          onSubmit={(values) => {
            handleSubmit && handleSubmit(values)
          }}

        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-x-2 gap-y-2">
                <MySelect
                  type="course"
                  name="course"
                  onChange={handleChange}
                  value={values.courseId}
                  label="Course:"
                  placeholder="Course"
                />
                <Dropdown 
                 type="module"
                 name="module"
                 handleChange={handleChange}
                //  onChange={handleChange}
                 value={values.moduleId}
                 option={courses}
                 label="Module:"
                 placeholder="Module"
                />
                <FormField
                  type="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  label="Title:"
                  placeholder="Title"
                />
              </div>
              <div className="mt-3">
                <SubmitButton type="submit">Save Module</SubmitButton>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModuleLectureForm;
