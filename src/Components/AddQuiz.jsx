import Header from './Header.jsx'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import { app } from "../firebase.js";
import { getDatabase, ref, set } from "firebase/database";


export default function AddQuiz() {

    let formHandler = (event) => {
        event.preventDefault();

        var question = event.target.question.value;
        var option1 = event.target.option1.value;
        var option2 = event.target.option2.value;
        var option3 = event.target.option3.value;
        var option4 = event.target.option4.value;
        var correct_answer = event.target.correct_answer.value;

        if(question == '' || option1 == '' || option2 == '' || option3 == '' || option4 == '' || correct_answer == ''){
            toast.error('All fileds required')
        } else {

            let obj = {
                question : question,
                option1 : option1,
                option2 : option2,
                option3 : option3,
                option4 : option4,
                correct_answer : correct_answer,
            }

            const db = getDatabase(app);
            set(ref(db, 'quizzes/' + Date.now()), obj);

            toast.success('Quiz added successfully !!');

            event.target.question.value = ''
            event.target.option1.value = ''
            event.target.option2.value = ''
            event.target.option3.value = ''
            event.target.option4.value = ''
            event.target.correct_answer.value = ''

            // toast.success('get data');
        }

    }

    return (
        <>
            <Header/>
            <ToastContainer/>
            <h1 className="p-5 text-3xl font-bold text-center bg-gray-400">
                Add Quiz
            </h1>
            <form className='p-5' onSubmit={formHandler}>
                <div className="space-y-12">
                    <div className="pb-12 border-b border-gray-900/10"></div>
                    
                    <div className="mx-5 col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Question
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="about"
                            name="question"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            />
                        </div>
                    </div>

                    <div className="mx-5 col-span-full">
                        <label htmlFor="option1" className="block text-sm font-medium leading-6 text-gray-900">
                            Option A
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                            <input
                                id="option1"
                                name="option1"
                                type="text"
                                placeholder="Option A"
                                autoComplete="off"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="mx-5 col-span-full">
                        <label htmlFor="option2" className="block text-sm font-medium leading-6 text-gray-900">
                            Option B
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                            <input
                                id="option2"
                                name="option2"
                                type="text"
                                placeholder="Option B"
                                autoComplete="off"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="mx-5 col-span-full">
                        <label htmlFor="option3" className="block text-sm font-medium leading-6 text-gray-900">
                            Option C
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                            <input
                                id="option3"
                                name="option3"
                                type="text"
                                placeholder="Option C"
                                autoComplete="off"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="mx-5 col-span-full">
                        <label htmlFor="option4" className="block text-sm font-medium leading-6 text-gray-900">
                            Option D
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                            <input
                                id="option4"
                                name="option4"
                                type="text"
                                placeholder="Option D"
                                autoComplete="off"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="mx-5 col-span-full">
                        <label htmlFor="correct_answer" className="block text-sm font-medium leading-6 text-gray-900">
                            Correct Answer
                        </label>
                        <div className="mt-2">
                            <select
                            id="correct_answer"
                            name="correct_answer"
                            autoComplete="off"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option>Select Option</option>
                            <option value="Option A">Option A</option>
                            <option value="Option B">Option B</option>
                            <option value="Option C">Option C</option>
                            <option value="Option D">Option D</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center mx-5 mt-6 mb-10 gap-x-6">
                        <button
                        type="submit"
                        className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Save
                        </button>
                    </div>

                </div>
            </form>
        </>
      
    )
  }