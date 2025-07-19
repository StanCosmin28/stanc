export default function () {
  const skills = [
    "JavaScript, TypeScript, Python",
    "Node.js, Express.js, React, Angular",
    "MongoDb, SQL, PostgreSQL",
    "Tailwind, CSS, HTML",
    "Illustrator, Photoshop, Figma",
    "AWS, SSTv3, Vercel, Heroku",
  ];
  return (
    <div className="mt-15">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li className="mt-1 text-sm opacity-90">• {skill}</li>
        ))}
      </ul>
    </div>
  );
}
