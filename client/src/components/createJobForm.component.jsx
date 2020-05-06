import React, { useState } from "react";
import { useFormik } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

export default function CreateJobForm() {
  const [jobSuccess, setJobSuccess] = useState("");
  const [jobFailed, setJobFailed] = useState("");
  const [jobDescription, setJobDescription] = useState(null);

  const handleEditorChange = (content, editor) => {
    setJobDescription(content);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      min_salary: "",
      max_salary: "",
      company_name: "",
      job_location: "",
      last_date_to_submit: "",
      contact_email: "",
      contact_num: "",
      starting_date: "",
      technologies: []
    },
    onSubmit: (
      {
        title,
        description,
        min_salary,
        max_salary,
        company_name,
        job_location,
        last_date_to_submit,
        contact_email,
        contact_num,
        starting_date,
        technologies
      },
      { resetForm }
    ) => {
      const jobDetails = {
        title,
        description: jobDescription,
        min_salary,
        max_salary,
        company_name,
        job_location,
        last_date_to_submit,
        contact_email,
        contact_num,
        starting_date,
        technologies
      };

      console.log(jobDetails);
      (async () => {
        try {
          await axios.post("https://bddevjobs.herokuapp.com/job/create", jobDetails);
          resetForm({});
          setJobDescription("");

          setJobSuccess("Congratulations!! Your job has been added! :D ");
        } catch (error) {
          setJobFailed(
            "Something went wrong! Please check if you have filled everything currently or let me know your issue at devarifhossain@gmail.com"
          );
        }

        window.scrollTo(0, 0);
      })();
    }
  });
  return (
    <div>
      {jobSuccess && (
        <div class="notification is-success">
          <button class="delete" onClick={() => setJobSuccess("")} />
          {jobSuccess}
        </div>
      )}
      {jobFailed && (
        <div class="notification is-danger">
          <button class="delete" onClick={() => setJobFailed("")} />
          {jobFailed}
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <div class="field">
          <label class="label">Job Title*</label>
          <div class="control">
            <input
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              class="input"
              type="text"
              placeholder="Junior Javascript Developer"
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Company Name*</label>
          <div class="control">
            <input
              name="company_name"
              onChange={formik.handleChange}
              value={formik.values.company_name}
              class="input"
              type="text"
              placeholder="XYZ Company"
              required
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div class="field">
              <label class="label">Contact Email*</label>
              <div class="control">
                <input
                  name="contact_email"
                  onChange={formik.handleChange}
                  value={formik.values.contact_email}
                  class="input"
                  type="text"
                  placeholder="xyz@zyx.com"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Contact Number</label>
              <div class="control">
                <input
                  name="contact_num"
                  onChange={formik.handleChange}
                  value={formik.values.contact_num}
                  class="input"
                  type="number"
                  placeholder="01XXXXXXXXXX"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Job Location*</label>
          <div class="control">
            <input
              name="job_location"
              onChange={formik.handleChange}
              value={formik.values.job_location}
              class="input"
              type="text"
              placeholder="House No. 3, Block X, Badda, Dhaka-1212"
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Job Description*</label>
          <div class="control">
            <Editor
              initialValue="<p>Description, Requirements...</p>"
              apiKey="ptkpfiwuk1nnjeqwslj8yh92pjh5w5v6prmfd71dg3zgizhs"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
              }}
              onEditorChange={handleEditorChange}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Key Technonogies</label>
          <div class="control">
            <input
              name="technologies"
              onChange={formik.handleChange}
              value={formik.values.technologies}
              class="input"
              type="text"
              placeholder="Javascript, ES6+, React.js, Redux"
            />
            <p class="help is-danger">*Use , to seperate technologies</p>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-body">
            <div class="field">
              <label class="label">Minimum Salary*</label>
              <div class="control has-icons-right">
                <input
                  name="min_salary"
                  onChange={formik.handleChange}
                  value={formik.values.min_salary}
                  class="input"
                  type="number"
                  placeholder="30000"
                  required
                />
                <span class="icon is-small is-right">
                  <span>TK</span>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Maximum Salary</label>
              <div class="control has-icons-right">
                <input
                  name="max_salary"
                  onChange={formik.handleChange}
                  value={formik.values.max_salary}
                  class="input"
                  type="number"
                  placeholder="50000"
                />
                <span class="icon is-small is-right">
                  <span>TK</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label">Last Date to Submit*</label>
              <div className="control">
                <input
                  name="last_date_to_submit"
                  onChange={formik.handleChange}
                  value={formik.values.last_date_to_submit}
                  className="input"
                  type="date"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Starting Date</label>
              <div className="control">
                <input
                  name="starting_date"
                  onChange={formik.handleChange}
                  value={formik.values.starting_date}
                  className="input"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="field mt-2rem">
          <p class="control">
            <button type="submit" class="button is-primary is-fullwidth">
              Submit
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
