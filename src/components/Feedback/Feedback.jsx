import { useState } from 'react';
import axios from 'axios';

export default function Feedback() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [classValue, setClassValue] = useState("");
    const [goal, setGoal] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Form submitted with the following values:');
        console.log('First name:', firstName);
        console.log('Last name:', lastName);
        console.log('Mobile number:', mobileNumber);
        console.log('Class value:', classValue);
        console.log('Goal:', goal);
        console.log('Message:', message);

        // Add mobile number validation
        if (mobileNumber.length !== 10 || !(/^\d+$/.test(mobileNumber))) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        const formData = new FormData();
        formData.append('entry.1537454436', firstName);
        formData.append('entry.178677731', lastName);
        formData.append('entry.300097809', mobileNumber);
        formData.append('entry.1702205279', classValue);
        formData.append('entry.1821114745_sentinel', goal);
        formData.append('entry.1163970636', message);

        try {
            // Update Google Form URL
            await axios.post('https://docs.google.com/forms/d/e/1FAIpQLSc5wb3OGHCmtmlaJrDN0XzLF0LUxmRMBmP1wanAO3xjJpYJWA/formResponse', formData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            });
            alert('Form submitted successfully');
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
            alert('An error occurred while submitting the form');
        }
    };


    return (
        <>
            <div className="bg-blue-950 border-2 p-8 rounded-lg max-w-3xl mx-auto mt-10 mb-36">
                <h1 className="text-3xl sm:text-4xl text-yellow-400 font-bold text-center mb-8">Feedback</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="feedbackFormFirstName" className="block text-white font-semibold pb-1">First Name</label>
                            <input value={firstName} onChange={e => setFirstName(e.target.value)} id="feedbackFormFirstName" type="text" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="First name" />
                        </div>
                        <div>
                            <label htmlFor="feedbackFormLastName" className="block text-white font-semibold pb-1">Last Name</label>
                            <input value={lastName} onChange={e => setLastName(e.target.value)} id="feedbackFormLastName" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="feedbackFormPhone" className="block text-white font-semibold pb-1">Mobile Number</label>
                            <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} id="feedbackFormPhone" type="text" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Enter 10-digit Mobile No." />
                        </div>
                        <div>
                            <label htmlFor="feedbackFormClass" className="block text-white font-semibold pb-1">Class</label>
                            <input type="text" value={classValue} onChange={e => setClassValue(e.target.value)} id="feedbackFormClass" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-gray-900" placeholder="Select Class" />
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

                    <button type="submit" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="bg-yellow-400 w-full font-semibold py-2 rounded-lg hover:bg-yellow-200 transition duration-300">Submit Feedback</button>
                </form>
            </div>
        </>
    );
}