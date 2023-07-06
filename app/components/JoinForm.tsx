const JoinForm = () => {
  return (
    <div className="flex flex-col gap-3 w-1/5 h-fit bg-slate-300 rounded-lg px-8 py-4 shadow-lg">
      <div className="flex flex-col gap-6 text-center">
        <span className="text-lg">
          Join now and embark on an epic adventure!
        </span>

        <form className="flex flex-col gap-3 text-sm">
          <input
            className="py-2 px-4 rounded-lg shadow-sm bg-slate-50 outline-none focus:scale-105 transition-transform"
            type="text"
            placeholder="Character Name"
          />
          <input
            className="py-2 px-4 rounded-lg shadow-sm bg-slate-50 outline-none focus:scale-105 transition-transform"
            type="text"
            placeholder="E-mail"
          />
          <input
            className="py-2 px-4 rounded-lg shadow-sm bg-slate-50 outline-none focus:scale-105 transition-transform"
            type="password"
            placeholder="Password"
          />
          <button
            className="py-2 px-4 rounded-lg shadow-sm bg-blue-600 text-slate-100 font-bold animate-pulse-slow"
          >
            JOIN NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinForm;