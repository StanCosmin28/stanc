export default function Skills() {
  const skills = [
    "JavaScript, TypeScript, Python",
    "Node.js, Express.js, React, Angular",
    "MongoDB, SQL, PostgreSQL",
    "Tailwind, CSS, HTML",
    "Illustrator, Photoshop, Figma",
    "AWS, SSTv3, Vercel, Heroku",
  ];
  return (
    <div className="mt-15">
      <h2 className="text-[1.8rem] font-medium mb-4">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li className="mt-1 text-[1.2rem] opacity-90 font-thin">• {skill}</li>
        ))}
      </ul>
    </div>
  );
}
