export default function Feedback() {
    return (
        <section>
            <div className="bg-gray-800 border-2 p-8 rounded-lg max-w-3xl mx-8 sm:mx-auto mt-10 mb-24">
                <h1 className="italic text-3xl text-white font-bold text-center mb-8 ">Feedback</h1>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="feedbackFormFirstName" className="block text-white font-semibold pb-1">First Name</label>
                            <input id="feedbackFormFirstName" type="text" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="First name" />
                        </div>
                        <div>
                            <label htmlFor="feedbackFormLastName" className="block text-white font-semibold pb-1">Last Name</label>
                            <input id="feedbackFormLastName" type="email" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Last email" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="feedbackFormPhone" className="block text-white font-semibold pb-1">Mobile Number</label>
                            <input id="feedbackFormPhone" type="text" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Enter 10-digit Mobile No." />
                        </div>
                        <div>
                            <label htmlFor="feedbackFormClass" className="block text-white font-semibold pb-1">Class</label>
                            <input id="feedbackFormClass" type="email" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Select Class" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="feedbackFormGoal" className="block text-white font-semibold pb-1">Goal</label>
                        <select id="feedbackFormGoal" className="w-full rounded-2xl border border-none focus:border-blue-500 px-4 py-2  shadow-md shadow-gray-900">
                            <option value="6">Select Your Goal</option>
                            <option value="5">School</option>
                            <option value="4">NEET</option>
                            <option value="3">JEE</option>
                            <option value="2">MHT-CET</option>
                            <option value="1">Tech</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="feedbackFormMessage" className="block text-white font-semibold pb-1">Message</label>
                        <textarea id="feedbackFormMessage" rows={3} className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" className="bg-gray-600 w-full shadow-lg shadow-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-sky-700 transition duration-300">Submit Feedback</button>
                </form>
            </div>
        </section>
    );
}