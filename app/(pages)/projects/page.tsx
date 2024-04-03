import Image from 'next/image';
export default function Page(){
  return (
    <main className="bg-umass-neutral-light dark:bg-umass-neutral pt-3 pb-3">
      <h1 className="text-4xl maroon-white">Spring 2024: Projects</h1>
      <span className="text-lg text-white">This spring, rather than have another lecture series, we wanted to give you a more hands-on and personalized experience. We are planning on having members work in teams to develop Machine Learning Projects based on their interests, giving them valuable ML expderience.</span>
      <br/>
      <b><h2 className="text-2xl maroon-white">Project Teams:</h2></b>
      <b className="text-white text-lg">If you want to join a project team, fill out <a className="text-blue-300" href="https://forms.gle/Sa91ZAeCtzkACCG18">this google form,</a> and we will try our best to put you on a team!</b><br/>
    </main>
  )
}
