import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-3xl">
          <span className="text-blue-500">Frontend Mentor</span> Kanban Task
          Manager
        </h1>

        {user ? (
          <div className="flex justify-center">
            <Link
              to="/"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
            >
              Logged in as {user.email}
            </Link>
            <Form action="/logout" method="post" className="inline-flex">
              <button
                type="submit"
                className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
              >
                Logout
              </button>
            </Form>
          </div>
        ) : (
          <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
            <Link
              to="/join"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600  "
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
