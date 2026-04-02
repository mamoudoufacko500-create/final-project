interface UserButtonProps {
    text?:string;
    className?:string;
    link?:string;
}
export default function UserButton({text,className}:UserButtonProps) {
  return (
    <button className={`${className} mt-4 px-4 py-2 bg-black text-white rounded hover:scale-105 transition duration-500`}>
      <a href="#">{text || "Mon button"}</a>
    </button>
  )
}