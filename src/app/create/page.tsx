export default function Page() {
  const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();

    console.log(e.target.value);
  };
  return (
    <div className="text-gray-700 p-6 flex max-w-7xl m-auto flex-col">
      <h1 className="text-3xl font-bold mb-2">Create</h1>
      <h3 className="text-l font-semi-bold mb-2">
        Create a new draft, you can invite your friends to join later.
      </h3>

      {/* just get the current tournament and players, set them server side and refresh periodically.  */}

      {/* make this client component */}
      {/* <form method="post" onSubmit={handleSubmit}>
        <label className="block mb-1 font-bold" htmlFor="forms-helpTextCode">
          Draft Name
        </label>
        <input
          className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          id="forms-helpTextCode"
          aria-describedby="draftName"
        />
        <span className="text-xs text-gray-600" id="draftName">
          This is required and will show for all invited players
        </span>

        <button type="submit">Submit</button> 
        
      </form>
        */}
    </div>
  );
}
