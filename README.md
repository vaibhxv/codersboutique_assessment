# Elegant Tasks: A Modern To-Do App

Elegant Tasks is a sleek, responsive to-do application built with Next.js, React, and Supabase. It offers a clean and intuitive interface for managing your daily tasks efficiently.

![Elegant Tasks Screenshot](https://github.com/vaibhxv/codersboutique_assessment/raw/main/Screenshot.png)

## Features

- **✅ Task Management**: Add, edit, complete, and delete tasks with ease.
- **🔄 Real-time Updates**: Changes are instantly reflected across all devices.
- **📱 Responsive Design**: Seamless experience on both desktop and mobile devices.
- **🌓 Elegant UI**: Clean and modern interface with smooth animations.
- **🔒 Data Persistence**: Tasks are securely stored in a Supabase database.
- **🚀 Fast Performance**: Built with Next.js for optimal loading speeds.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Supabase
- **State Management**: React Hooks
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/elegant-tasks.git
   cd elegant-tasks
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

- **Adding a Task**: Type your task in the input field at the top and press Enter or click the "Add Task" button.
- **Completing a Task**: Click the checkmark button next to a task to mark it as complete.
- **Editing a Task**: Click the edit button (pencil icon) to modify the task text.
- **Deleting a Task**: Click the delete button (trash icon) and confirm to remove a task.
- **Undoing a Completed Task**: In the "Completed Tasks" section, click the undo button to move a task back to active tasks.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Built with ❤️ by [Vaibhav Rohaan](https://github.com/vaibhxv)
