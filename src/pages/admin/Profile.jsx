export const Profile = () => {
  return (
    <>
      <div className="bg-secondary-100 p-4 rounded-t-xl border border-secondary-200">
        <h3>Profile</h3>
      </div>
      <form className="bg-secondary-100 p-4 rounded-b-xl border-r border-l border-b border-secondary-200 flex">
        <div className="flex flex-col w-1/4">
          <p>Photo</p>
          <p>Name</p>
        </div>
        <div className="flex-1">
          <p>150x150</p>
        </div>
      </form>
    </>
  );
};