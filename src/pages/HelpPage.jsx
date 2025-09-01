import React from "react";
import NavBar from "../components/Navbar";
const HelpPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <NavBar />
      <div className ="flex-1 bg-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-center">Help & Support</h1>

        <p className="text-lg mb-6 text-gray-700 text-center">
          Need help using the Event Manager? Follow the guide below to learn how
          to add, edit, and manage your events easily.
        </p>

        <section className=" px-8">
          <h2 className="text-2xl font-semibold mb-2">➕ Adding a New Event</h2>
          <ol className="list-decimal list-inside text-lg text-gray-800 space-y-2">
            <li>Navigate to the "Create Event" section.</li>
            <li>
              Fill in the event details: title, date, time.
            </li>
            <li>
              Click the <strong>"Save"</strong>{" "}
              button to publish your event.
            </li>
          </ol>
        </section>

        <section className=" px-8">
          <h2 className="text-2xl font-semibold mb-2">✏️ Editing an Event</h2>
          <ol className="list-decimal list-inside text-lg text-gray-800 space-y-2">
            <li>Go to your "Dashboard" page.</li> 
            <li>
              Find the event you want to update and click the{" "}
              <strong>"Edit"</strong> button.
            </li>
            <li>
              Modify the necessary fields (e.g., date, time, title).
            </li>
            <li>
              Click <strong>"Update"</strong> to save your changes.
            </li>
          </ol>
        </section>

        <section className="px-8">
          <h2 className="text-2xl font-semibold mb-2">🗑️ Deleting an Event</h2>
          <ol className="list-decimal list-inside text-lg text-gray-800 space-y-2">
            <li>In your events list, locate the event you want to remove.</li>
            <li>
              Click the <strong>"Delete"</strong> button
            </li>
          </ol>
        </section>

        <section className=" px-8">
          <h2 className="text-2xl font-semibold mb-2">
            📋 Viewing All Your Events
          </h2>
          <p className="text-lg text-gray-800">
            You can view all events you’ve created on the "Dashboard"
            page
          </p>
        </section>

        <section className=" px-8">
          <h2 className="text-2xl font-semibold mb-2">📧 Need More Help?</h2>
          <p className="text-lg text-gray-800">
            If you’re experiencing issues or have questions, feel free to reach
            out to our support team at{" "}
            <a
              href="mailto:support@youreventapp.com"
              className="text-blue-500 underline"
            >
              support@youreventapp.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;
