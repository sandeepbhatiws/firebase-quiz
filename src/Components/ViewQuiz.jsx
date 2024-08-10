import Header from './Header.jsx'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase.js";
import { useEffect, useState } from 'react';

export default function ViewQuiz() {

    let [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const starCountRef = ref(db, 'quizzes/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
            var quizOutput = [];
            for(let key in data){
                quizOutput.push(data[key]);
            }
            setQuizData(quizOutput);
        });
    },[]);

    return (
        <>
            <Header/>
            <h1 className="p-5 text-3xl font-bold text-center bg-gray-400">
            View Quiz
        </h1>

        <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
            <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Sno
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Question
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option A
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option B
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option C
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left"
              >
                Option D
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left"
              >
                correct Answer
              </th>
            </tr>
          </thead>
          <tbody>
                            {
                                quizData.map((v,i) => {
                                    return(
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                {i+1}
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                {v.question}
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                {v.option1}
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {v.option2}
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {v.option3}
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {v.option4}
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {v.correct_answer}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                                
                        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
      
    )
  }