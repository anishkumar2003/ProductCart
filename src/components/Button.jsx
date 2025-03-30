function Button({ text, onClick }) {
    return (
        <button
            className="w-[80%] border-2 font-bold bg-navColor text-white rounded-3xl p-2 shadow-2xl text-center cursor-pointer hover:bg-purple-700 active:scale-95 transition"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
