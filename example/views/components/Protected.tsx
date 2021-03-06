import { React } from '../../deps.ts';

const Protected: any = (props: any) => {
  const { setPage } = props;
  const logout = () => {
    fetch('/logout', {
      method: 'GET',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          setPage('entry');
        }
      })
      .catch((err) => console.log(JSON.stringify(err)));
  };
  return (
    <div className="protected">
      <h1>Protected Page</h1>

      <div
        id="logout"
        className="buttons"
        onClick={() => {
          logout();
        }}
      >
        Log out
      </div>
    </div>
  );
};

export default Protected;
