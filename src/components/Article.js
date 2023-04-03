import { Link } from 'react-router-dom';

export default function Article() {
    return (
        <main>
            <article>
                <time datetime="2020-11-12">11/12/20</time>
                <h3>On the Street in Brooklyn</h3>
                <img src="./images/blog-image-1.jpg" alt="woman-on-street" />
                <p>Corem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                    modi pariatur rerum est itaque nobis. Illo voluptates ullam quas cum
                    eos commodi sed, cumque fugiat exercitationem mollitia assumenda,
                    alias veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Quia voluptatum officia deleniti quo, perspiciatis adipisci
                    sunt sed perferendis ullam accusantium eos temporibus veritatis.
                    Laborum, in eligendi possimus quisquam voluptatem necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                    suscipit vel voluptas perspiciatis libero perferendis quae optio
                    facilis maiores. Rerum ex rem numquam dolorem quia et animi, earum
                    nostrum voluptate. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aperiam possimus nostrum, iusto velit, commodi sit
                    voluptas fuga repellendus tempore repudiandae nulla deserunt at vero
                    exercitationem temporibus inventore distinctio officia beatae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, incidunt ducimus sequi repellendus earum labore! Incidunt dicta pariatur at velit harum aspernatur ut distinctio? Eligendi hic nesciunt minima repudiandae id?
                </p>
                <div class="display-flex">
                    <Link to="/" class="continue" >Continues ...</Link>
                </div>
            </article>
            <article>
                <time datetime="2020-11-12">11/12/20</time>
                <h3>Vintage in Vogue</h3>
                <img src="./images/blog-image-2.jpg" alt="models" />
                <p>
                    Corem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                    culpa, id esse fugiat officiis optio quo vitae doloremque aperiam
                    tenetur magnam molestias facere cupiditate. Ipsam fuga velit aliquid
                    id quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam ipsum minima ipsa deleniti ex aut exercitationem autem officiis
                    enim in dolore eos, facere explicabo fugiat dignissimos sequi
                    eligendi asperiores. Ipsam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam nulla temporibus velit ratione quas porro
                    doloremque accusantium quae deleniti, eos minima eaque fuga omnis
                    consectetur eum nesciunt sit amet ducimus! Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Nostrum molestias voluptates, sit
                    illo quos consequuntur dolore at placeat. Soluta in similique
                    nesciunt ea sed quos fuga quasi iste voluptatem eos? Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Laborum rem ratione
                    maiores, minima itaque vero cupiditate recusandae iste illo
                    perspiciatis deleniti saepe, sint sequi perferendis distinctio
                    reprehenderit minus consequatur voluptatem?
                </p>
                <div class="display-flex">
                    <Link to="/" class="continue" >Continues ...</Link>
                </div>
            </article>
        </main >
    )
}