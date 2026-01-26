import { Container, Header } from "../../components/layout"
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form"
import { z } from "zod";
import { continueFun } from "../../store/data/dataSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const postValidation = z.object({
  fullName: z.string().min(1, "fullName is required").max(20, "Max is 20"),
  email: z.string().min(8, "email is required"),
  birthdate: z.string().min(1, "date is required"),
  gender: z.string().refine((gender) => gender !== '', {
    message: 'gender is required',
  }),
  skill: z.string().min(1, "skill is required"),
  isAccept: z.boolean().optional(),
  about: z.string().min(1, "about is required"),
  cv: z.instanceof(File, { message: "CV is required" }),
  vedio: z.instanceof(File, { message: "vedio is required" })
})
function FormData() {
  const navigate = useNavigate();
  const { savedInfo } = useSelector((state) => state.info);
  const dispatch = useDispatch();

  const { register, handleSubmit, control, formState: { errors } } = useForm(
    {
      resolver: zodResolver(postValidation),
      defaultValues: {
        fullName: savedInfo?.fullName || "",
        email: savedInfo?.email || "",
        birthdate: savedInfo?.birthdate || "",
        gender: savedInfo?.gender || "",
        skill: savedInfo?.skill || "",
        isAccept: savedInfo?.isAccept || false,
        about: savedInfo?.about || "",
      }
    });
  const submitHandler = (data) => {
    const formattedData = {
      ...data,
      cv: {
        name: data.cv.name,
        size: data.cv.size,
        type: data.cv.type,
      },
      vedio: {
        name: data.vedio.name,
        size: data.vedio.size,
        type: data.vedio.type,
      },
    };

    dispatch(continueFun(formattedData));
    navigate("/preview");
  }


  return (
    <div className="bg-[#D9D9D9] h-full  ">
      <Container variant="secondary" className="px-7">
        <Header>Job Application</Header>
        <hr
          className="h-0.5 w-full  text-[#D9D9D9]"
        />
        <Form noValidate onSubmit={handleSubmit(submitHandler)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="fullName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                {...register("fullName")}
                isInvalid={!!errors.fullName}

              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                {...register("email")}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="birthdate">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
                type="date"
                {...register("birthdate")}
                isInvalid={!!errors.birthdate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.birthdate?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                {...register("gender")}
                isInvalid={!!errors.gender}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.gender?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="about">
              <FloatingLabel label="About you">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                  {...register("about")}
                  isInvalid={!!errors.about}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {errors.about?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Skill</Form.Label>

              <Form.Check
                type="radio"
                label="UI-UX"
                value="UI-UX"
                {...register("skill")}
              />
              <Form.Check
                type="radio"
                label="Flutter"
                value="Flutter"
                {...register("skill")}
              />
              <Form.Check
                type="radio"
                label="React.js"
                value="React.js"
                {...register("skill")}
              />

              {errors.skill && (
                <div className="text-danger">{errors.skill.message}</div>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Upload CV</Form.Label>
              <Controller
                name="cv"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    isInvalid={!!errors.cv}
                  />
                )}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cv?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Upload video</Form.Label>
              <Controller
                name="vedio"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type="file"
                    accept="video/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    isInvalid={!!errors.vedio}
                  />
                )}
              />
              <Form.Control.Feedback type="invalid">
                {errors.vedio?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              label="Agree to work remotly"
              {...register("isAccept")}
            />
          </Form.Group>


          <Button type="submit"

           
          >continue</Button>

        </Form>

      </Container>
    </div>
  )
}

export default FormData
