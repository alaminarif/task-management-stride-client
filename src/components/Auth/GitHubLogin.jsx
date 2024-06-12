import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function GitHubLogin() {
  const [signInWithGithub, user, error] = useSignInWithGithub(auth);
  console.log(user, error);
  return (
    <div>
      <button onClick={() => signInWithGithub()} className="px-5 py-3  bg-primary w-full rounded-lg">
        Github Login{" "}
      </button>
    </div>
  );
}
