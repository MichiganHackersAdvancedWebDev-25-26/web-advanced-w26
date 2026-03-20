export default function UploadPage() {
  return (
   <>
<div className="mx-auto mt-8 w-fit rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-8 py-4 text-center text-4xl font-extrabold text-white shadow-lg">
  Send Us Your Best Notes!
</div>
  <form className="flex flex-col items-center justify-center p-10" >
  <p className="m-5">Upload your notes to help others learn!</p>
   
  <div className="mx-auto mt-6 max-w-xl">
  <label
    htmlFor="file"
    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-300 bg-indigo-50 px-6 py-10 text-center transition hover:bg-indigo-100"
  >
    <span className="text-lg font-semibold text-indigo-700">
      Drag & drop file here
    </span>
    <span className="mt-1 text-sm text-indigo-600">
      or click to choose file
    </span>

    <input id="file" name="file" type="file" className="hidden" />
  </label>
</div>

  <input
  id="file"
  name="file"
  type="file"
  className="mt-10 block mx-auto mt-3 text-sm text-gray-700
             file:mr-4 file:rounded-md file:border-0
             file:bg-indigo-600 file:px-4 file:py-2
             file:text-sm file:font-semibold file:text-white
             hover:file:bg-indigo-700 m-10"
/>

  </form>
   
   </>
  
  );
}
