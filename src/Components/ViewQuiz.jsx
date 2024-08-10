import Header from './Header.jsx'

export default function ViewQuiz() {
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
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              >
                Option D
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              >
                correct Answer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    Dummy text                  
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    Dummy text                  
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    Dummy text                  
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    Dummy text                  
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    Dummy text                  
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    Dummy text                  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
      
    )
  }