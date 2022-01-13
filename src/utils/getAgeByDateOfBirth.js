/**
 * FIXME:
 * getAgeByDateOfBirth function return value is inaccurate,
 * because the age it returns is based on years substraction.
 */

const getAgeByDateOfBirth = (dateOfBirth) => {
  const currentYear = new Date().getFullYear();
  const dateOfBirthYear = new Date(dateOfBirth).getFullYear();
  const age = currentYear - dateOfBirthYear;
  return age;
};

export default getAgeByDateOfBirth;
