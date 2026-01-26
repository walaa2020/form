import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from '../../components/layout';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { saveCookies, saveFun } from "../../store/data/dataSlice";
const Preview = () => {
  const dispatch = useDispatch();
  const { savedInfo } = useSelector((state) => state.info)
const saveHandler = async () => {
  try {
    await dispatch(saveFun(savedInfo));
    dispatch(saveCookies(savedInfo));
    alert("Saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Failed to save data!");
  }
};

  return (
    <div className="bg-[#D9D9D9] min-h-screen py-4">
      <Container className="bg-white p-4 rounded ">
        <Header>Job Application</Header>
        <hr
          className="h-0.5 w-full  text-[#D9D9D9]"
        />
        <Form.Group as={Row} className="mb-3    pl-7 pt-9 " >
          <Form.Label column sm={2} className='font-bold '>Full Name</Form.Label>
          <Col sm={9}>
            <Form.Control value={savedInfo.fullName} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>Email</Form.Label>
          <Col sm={9}>
            <Form.Control value={savedInfo.email} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>Birthdate</Form.Label>
          <Col sm={9}>
            <Form.Control type="date" value={savedInfo.birthdate} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>Gender</Form.Label>
          <Col sm={9}>
            <Form.Control value={savedInfo.gender} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>Skill</Form.Label>
          <Col sm={9}>
            <Form.Control value={savedInfo.skill} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>About</Form.Label>
          <Col sm={9}>
            <Form.Control as="textarea" rows={3} value={savedInfo.about} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>CV</Form.Label>
          <Col sm={9}>
            <Form.Control value={savedInfo.cv.name} readOnly />
            <small className="text-muted">
              {Math.round(savedInfo.cv.size / 1024)} KB · {savedInfo.cv.type}
            </small>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 pl-7  ">
          <Form.Label column sm={2} className='font-bold'>Video</Form.Label>
          <Col sm={9}>
            <Form.Control value={savedInfo.vedio.name} readOnly />
            <small className="text-muted">
              {Math.round(savedInfo.vedio.size / (1024 * 1024))} MB · {savedInfo.vedio.type}
            </small>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='pl-7 '  >
          <Form.Label column sm={2} className='font-bold'>Accepted</Form.Label>
          <Col sm={9}>
            <Form.Check
              type="checkbox"
              checked={savedInfo.isAccept}
              disabled
              label={savedInfo.isAccept ? "work remotely" : "don't work remotely"}
            />
          </Col>
        </Form.Group>
        <Button type="button"
          className='btn'
          onClick={saveHandler}
        


        >save</Button>
      </Container>

    </div>
  );
};

export default Preview;
