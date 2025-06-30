import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="自己紹介" />
          <p className="text-slate-600 mt-8 leading-loose">
            現在、三重県四日市市に在住しているベトナム出身のファン・ドック・チュン(PHAM
            DUC TUNG)と申します。
            独学でWebフロントエンド開発を学び、Next.js、React、Supabase、Node.js
            などを用いた個人プロジェクトを作成してきました。UIの構築、状態管理、データベースとの連携などを経験しております。チームでの開発経験はまだありませんが、積極的に学び、早く現場に慣れて貢献できるよう努めます。
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
