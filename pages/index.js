import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <h1 className="title text-7xl font-bold text-center">QuizGPT</h1>
      <div className="answer-container">
        <h3 className="answer text-3xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          voluptates voluptatem placeat libero perspiciatis reiciendis
          consequuntur necessitatibus modi hic velit eius, rem officia tempore
          neque molestias. Ipsam est fugiat dolorum. Eligendi mollitia minima id
          libero! Voluptatem quod velit deleniti animi cum beatae non sint natus
          delectus nisi rem nihil reiciendis esse quisquam debitis harum tempora
          aliquam, impedit praesentium unde nam. Expedita nesciunt labore
          deleniti fugiat. Dolorum incidunt culpa aspernatur numquam quo
          eligendi explicabo voluptas assumenda modi sint reprehenderit
          perferendis quis qui facilis, harum velit eaque labore eius rem, ut
          quos? Sapiente, ex nobis modi expedita magnam autem nihil sit!
          Officia, dicta deserunt placeat consequuntur dolore excepturi
          reiciendis ipsam et assumenda doloribus quia omnis perspiciatis eaque,
          dolorem est voluptates? Consequuntur, perferendis. Sed voluptatibus
          error sit hic corrupti aspernatur cupiditate vel natus alias ex fugit
          harum, nemo illum odio impedit qui a dolorem, fuga quisquam
          consectetur magnam labore fugiat vero. Ex, tempore? Quibusdam magnam
          soluta qui dolore repellat repudiandae ut nostrum voluptatem
          reprehenderit sapiente, dignissimos consequatur esse molestias animi
          inventore itaque aliquam culpa autem, vitae, alias ex dolor excepturi.
          Nobis, repellat asperiores. Dolorum sunt officiis quas accusantium
          nesciunt quisquam pariatur quis quo quam perferendis consequuntur in
          itaque, velit aut, nisi nihil tenetur illo. Dolore, quibusdam ullam!
          Saepe possimus laudantium ea aspernatur debitis? Quos excepturi
          delectus ex cupiditate! Sint porro veniam quasi sapiente? Enim quaerat
          minima ullam nobis quae vel perspiciatis voluptatibus ex ipsum numquam
          deleniti obcaecati veniam explicabo blanditiis quia, asperiores sint!
          Nam veritatis, sed non ipsam atque in quo inventore illum ipsum
          voluptate accusantium beatae eveniet culpa quaerat quasi vel porro
          laboriosam saepe! Maxime modi beatae nulla voluptate ratione similique
          odio!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          voluptates voluptatem placeat libero perspiciatis reiciendis
          consequuntur necessitatibus modi hic velit eius, rem officia tempore
          neque molestias. Ipsam est fugiat dolorum. Eligendi mollitia minima id
          libero! Voluptatem quod velit deleniti animi cum beatae non sint natus
          delectus nisi rem nihil reiciendis esse quisquam debitis harum tempora
          aliquam, impedit praesentium unde nam. Expedita nesciunt labore
          deleniti fugiat. Dolorum incidunt culpa aspernatur numquam quo
          eligendi explicabo voluptas assumenda modi sint reprehenderit
          perferendis quis qui facilis, harum velit eaque labore eius rem, ut
          quos? Sapiente, ex nobis modi expedita magnam autem nihil sit!
          Officia, dicta deserunt placeat consequuntur dolore excepturi
          reiciendis ipsam et assumenda doloribus quia omnis perspiciatis eaque,
          dolorem est voluptates? Consequuntur, perferendis. Sed voluptatibus
          error sit hic corrupti aspernatur cupiditate vel natus alias ex fugit
          harum, nemo illum odio impedit qui a dolorem, fuga quisquam
          consectetur magnam labore fugiat vero. Ex, tempore? Quibusdam magnam
          soluta qui dolore repellat repudiandae ut nostrum voluptatem
          reprehenderit sapiente, dignissimos consequatur esse molestias animi
          inventore itaque aliquam culpa autem, vitae, alias ex dolor excepturi.
          Nobis, repellat asperiores. Dolorum sunt officiis quas accusantium
          nesciunt quisquam pariatur quis quo quam perferendis consequuntur in
          itaque, velit aut, nisi nihil tenetur illo. Dolore, quibusdam ullam!
          Saepe possimus laudantium ea aspernatur debitis? Quos excepturi
          delectus ex cupiditate! Sint porro veniam quasi sapiente? Enim quaerat
          minima ullam nobis quae vel perspiciatis voluptatibus ex ipsum numquam
          deleniti obcaecati veniam explicabo blanditiis quia, asperiores sint!
          Nam veritatis, sed non ipsam atque in quo inventore illum ipsum
          voluptate accusantium beatae eveniet culpa quaerat quasi vel porro
          laboriosam saepe! Maxime modi beatae nulla voluptate ratione similique
          odio! asdfasdfasd
        </h3>
      </div>
      <div className="footer">
        <div className="textbox-container flex flex-row w-full">
          <textarea
            type="search"
            id="inputBox"
            className="drop-shadow-xl block w-full text-m"
            placeholder="Send a message"
            required=""
          />
          <button
            type="submit"
            className="submitBtn text-white right-2.5 bottom-2.5"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </button>
        </div>
      </div>
    </>
  );
}
