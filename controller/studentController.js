import studentModel from "../models/studentModel.js";

export const studentDataCreate = async (req, res) => {
  const { name, age, phoneNumber, email, location } = req.body;

  let studentPhoto = null;
  if (req?.file?.filename) {
    studentPhoto = req.file.filename;
  }
  const studentData = await studentModel.create({
    name,
    age,
    phoneNumber,
    email,
    location,
    photo: studentPhoto,
  });
  res.status(200).json(studentData);
};

/////// GET ALL DATA //////////

export const getAllStudentData = async (req, res) => {
  const data = await studentModel.find().where(location).it("pokomba");
  res.status(200).json(data);
};

/////// GET One DATA //////////

export const getOneStudentData = async (req, res) => {
  const { id } = req.params;
  const data = await studentModel.findById(id);
  res.status(200).json(data);
};
/////// Delete DATA //////////

export const deleteStudentData = async (req, res) => {
  const { id } = req.params;
  const data = await studentModel.findByIdAndDelete(id);
  res.status(200).json(data);
};

/////// Updata DATA //////////

export const updateStudentData = async (req, res) => {
  const { id } = req.params;
  const { name, age, phoneNumber, email, location } = req.body;
  const data = await studentModel.findByIdAndUpdate(
    id,
    { name, age },
    { new: true }
  );
  res.status(200).json(data);
};
