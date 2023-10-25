import './User.css'

const Users = () => {
  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push(
      <article className="user">
        <figure className="user__picture">
          <img className="user__item" src="../src/assets/user.png" alt="" />
        </figure>
        <p>Nombre</p>
        <p>Apellido</p>
        <p>Edad</p>
      </article>
    );
  }
  console.log(users);
  return (
    <>
      <h1 className='title'>Users</h1>
      <main>
        <section className='card-users'>
         {users}
        </section>
      </main>
    </>
  );
};

export default Users;

