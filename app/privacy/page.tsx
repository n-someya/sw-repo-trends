export default function PrivacyPolicyPage() {
  return (
    <div className="animate-in flex-1 flex flex-col w-full px-3 pt-3">
      <h1 className="text-3xl font-bold underline">プライバシーポリシー</h1>
      <p className="text-sm text-gray-600 mt-2">最終更新日：2024年6月15日</p>
      <section className="mt-4">
        <p className="prose">本プライバシーポリシー（以下、「本ポリシー」）は、Software Repo Trends（以下、「本アプリ」）の利用に関する個人情報の収集、利用、および共有について定めるものです。本アプリを利用することにより、本ポリシーに同意したものとみなされます。</p>
        <h2 className="text-xl font-semibold">1. 収集する情報</h2>
        <p className="prose">本アプリは、利用者の行動データを収集するためにGoogle Analyticsを使用します。収集される情報には、IPアドレス、デバイス情報、訪問したページ、利用時間などが含まれます。</p>
        <h2 className="text-xl font-semibold">2. 情報の利用目的</h2>
        <p className="prose">収集した情報は、本アプリの改善、利用状況の分析、サービス向上のために使用されます。</p>
        <h2 className="text-xl font-semibold">3. 情報の共有</h2>
        <p className="prose">収集した情報は、法令に基づく場合を除き、第三者に提供されることはありません。</p>
        <h2 className="text-xl font-semibold">4. クッキーの使用</h2>
        <p className="prose">本アプリは、利用者の行動を追跡するためにクッキーを使用します。利用者は、ブラウザの設定によりクッキーの使用を拒否することができますが、その場合、本アプリの一部機能が利用できなくなることがあります。</p>
        <h2 className="text-xl font-semibold">5. プライバシーポリシーの改訂</h2>
        <p className="prose">本ポリシーは随時変更されることがあります。変更後のポリシーは、本アプリ内または公式ウェブサイトに掲載された時点で有効となります。</p>
        <h2 className="text-xl font-semibold">6. お問い合わせ</h2>
        <p className="prose">本ポリシーに関するお問い合わせは、<a className="underline" href="https://forms.gle/MnZYwncQwyQZwRZn6">こちら</a>までお願いします。</p>
      </section>
    </div>
  );
}
