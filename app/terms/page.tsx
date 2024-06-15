// 利用規約を記載した静的な内容のみのページを作成
export default function TermsPage() {
  return (
    <div className="animate-in flex-1 flex flex-col w-full px-3 pt-3 border-b border-b-foreground/10">
      <h1 className="text-3xl font-bold underline">利用規約</h1>
      <p className="text-sm text-gray-600 mt-2">最終更新日：2024年6月15日</p>
      <p className="prose">この利用規約（以下、「本規約」）は、Software Repo Trends（以下、「本アプリ」）の利用に関する条件を定めるものです。本アプリを利用することにより、本規約に同意したものとみなされます。</p>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">1. 利用条件</h2>
        <p className="prose">本アプリは、個人開発者により提供されます。利用者は、本アプリを自己責任で使用するものとし、開発者は本アプリの利用に関していかなる保証も行いません。</p>
        <p className="prose">本アプリの利用は、合法的な目的に限られます。</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">2. 禁止事項</h2>
        <p className="prose">本アプリの利用にあたり、以下の行為を禁止します。</p>
        <ul className="list-disc pl-5">
          <li>法令または公序良俗に違反する行為。</li>
          <li>犯罪行為に関連する行為。</li>
          <li>本アプリ、他の利用者、または第三者の権利を侵害する行為。</li>
          <li>サーバーまたはネットワークに過度の負荷をかける行為。</li>
          <li>本アプリの運営を妨げる行為。</li>
          <li>本アプリで得た情報を商用目的において利用すること。</li>
          <li>本アプリを利用した宣伝、広告、勧誘、営業行為。</li>
          <li>その他、開発者が不適切と判断する行為。</li>
        </ul>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">3. 無保証および免責事項</h2>
        <p className="prose">本アプリは「現状のまま」提供されており、明示的または黙示的な保証は一切ありません。開発者は、本アプリの正確性、信頼性、完全性、特定の目的適合性について一切保証しません。</p>
        <p className="prose">本アプリの利用により生じた損害について、開発者は一切責任を負いません。</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">4. 個人情報の取り扱い</h2>
        <p className="prose">本アプリにおける個人情報の取り扱いは「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
        <p className="prose">本アプリは、利用状況の分析のためにGoogle Analyticsを使用します。Google Analyticsによって収集されたデータは、利用者の行動を分析するために使用されます。</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">5.. 改訂</h2>
        <p className="prose">本規約は随時変更されることがあります。変更後の規約は、本アプリ内または公式ウェブサイトに掲載された時点で有効となります。</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">6. 準拠法</h2>
        <p className="prose">本規約は、日本の法律に準拠し、解釈されます。</p>
      </section>
    </div>
  );
}
