const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const surname = e.target.surname.value;
    const age = e.target.age.value;
    console.log(firstname, surname, age);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="firstname" />
      <input type="text" name="surname" />
      <input type="number" name="age" min={0} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
