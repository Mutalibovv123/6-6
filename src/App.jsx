import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState('');
  const [shape, setShape] = useState('');
  const [code, setCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [message, setMessage] = useState('');
  const [selectingItems, setSelectingItems] = useState([]);
  const [colour, setColour] = useState('');
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleShape = () => {
    switch (parseInt(num)) {
      case 3:
        setShape('Uchburchak');
        break;
      case 4:
        setShape('Tortburchak');
        break;
      case 5:
        setShape('Beshburchak');
        break;
      default:
        setShape('Bunday shakl mavjud emas');
    }
  };

  const handlePassword = () => {
    setMessage(code === confirmCode ? 'Kod mos keldi' : 'Kod mos kelmadi');
  };

  const handleCheckbox = (item) => {
    setSelectingItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleEmail = () => {
    const isValid = email.includes('@') && email.includes('.com');
    setEmailMessage(isValid ? "Email to'g'ri" : "Email noto'g'ri formatda");
  };

  const switchInputs = () => {
    const switchingInputs = firstInput;
    setFirstInput(secondInput);
    setSecondInput(switchingInputs);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6 max-w-lg m-auto bg-gray-50 rounded-lg shadow-lg">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Shaklni aniqlash</h2>
        <input
          type="number"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Raqam kiriting"
          onChange={(e) => setNum(e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg mt-2"
          onClick={handleShape}
        >
          Shaklni aniqlash
        </button>
        <p className="mt-2 text-gray-700">{shape}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Parol tekshirish</h2>
        <input
          type="password"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Parol"
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="password"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Parolni tasdiqlash"
          onChange={(e) => setConfirmCode(e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg mt-2"
          onClick={handlePassword}
        >
          Tekshirish
        </button>
        <p className="mt-2 text-gray-700">{message}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Checkbox bilan ro’yxat</h2>
        {['Olma', 'Banan', 'Apelsin'].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="text-red-500"
              onChange={() => handleCheckbox(item)}
            />
            <label>{item}</label>
          </div>
        ))}
        <p className="mt-2 text-gray-700">Tanlanganlar: {selectingItems.join(', ')}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Rangni o'zgartirish</h2>
        {['Qizil', 'Yashil', 'Ko\'k'].map((col, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="color"
              value={col}
              className="text-red-500"
              onChange={(e) => setColour(e.target.value.toLowerCase())}
            />
            <label>{col}</label>
          </div>
        ))}
        <div
          className={`w-full h-24 rounded-md mt-4`}
          style={{ backgroundColor: colour }}
        ></div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Email tekshirish</h2>
        <input
          type="email"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Email kiriting"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg mt-2"
          onClick={handleEmail}
        >
          Tekshirish
        </button>
        <p className="mt-2 text-gray-700">{emailMessage}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Inputlarni almashtirish</h2>
        <input
          type="text"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Input 1"
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
        />
        <input
          type="text"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Input 2"
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg mt-2"
          onClick={switchInputs}
        >
          Qiymatlarni almashtirish
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">To-do ro’yxat</h2>
        <input
          type="text"
          className="border p-3 rounded-md w-full mt-2 bg-gray-200 text-gray-800"
          placeholder="Vazifa kiriting"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg mt-2"
          onClick={addTask}
        >
          Qo'shish
        </button>
        <ul className="mt-4 space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b p-3"
            >
              {t}
              <button
                className="text-red-500"
                onClick={() => removeTask(index)}
              >
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
