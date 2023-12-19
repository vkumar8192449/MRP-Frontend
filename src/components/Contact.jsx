import React from "react";

export const Contact = () => {
    return (
        <div class="flex mt-8">
            <div class="-mb-16 w-full mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 items">
                <form class="space-y-6" action="#">
                    <h5 class="text-4xl font-semibold text-center text-gray-900">Contact Us</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
                    </div>
                    <div>

                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>

                    </div>
                    <button type="submit" class="justify-center sm:px-1 sm:w-2/5 md:w-1/5 items-center w-1/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5">Send Message</button>
                </form>
            </div>
        </div>
    );
};