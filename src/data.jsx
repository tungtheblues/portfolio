import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "ホーム" },
  { id: nanoid(), href: "#skills", text: "スキル" },
  { id: nanoid(), href: "#about", text: "自己PR" },
  { id: nanoid(), href: "#projects", text: "プロジェクト" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "HTML・CSSの基本を理解しており、個人プロジェクトを通じてレスポンシブ対応のWebページを作成した経験があります。シンプルで見やすいUIの実装に取り組んでいます。",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "JavaScript（ES6）の基礎を独学で学び、ユーザー操作に応じた動きのある画面を実装した経験があります。Reactを通じて、状態管理やイベント処理などの理解を深めています。",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Reactの基本的な使い方を習得しており、コンポーネントの分割、propsの受け渡し、useStateなどを使った状態管理を学んでいます。個人開発で簡単なTodoアプリやポートフォリオサイトを作成しました。",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/1.png",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "Pizza order",
    text: "React + Redux Toolkit + Viteを使用して構築されたモダンなピザデリバリーアプリケーションです。ユーザーはメニューの閲覧、カートへの商品追加、注文作成、注文追跡が可能です。",
  },
  {
    id: nanoid(),
    img: "/2.png",
    url: "https://usepopcorn-tung.vercel.app/",
    github: "https://github.com/tungtheblues/usepopcorn",
    title: "usePopcorn",
    text: "映画愛好家のためのReactアプリケーションです。OMDB APIを使って映画を検索し、詳細情報を表示できます。ユーザーは観た映画に星評価を付け、ウォッチリストを作成・管理できます。",
  },
  {
    id: nanoid(),
    img: "/3.png",
    url: "https://portfolio-tung.vercel.app/",
    github: "https://github.com/tungtheblues/portfolio",
    title: "ポートフォリオ",
    text: "モダンなReact技術スタックを使用して構築された個人ポートフォリオサイトです。Vite、TailwindCSS、React Iconsを組み合わせて、レスポンシブで美しいUIを実現しています。",
  },
];
