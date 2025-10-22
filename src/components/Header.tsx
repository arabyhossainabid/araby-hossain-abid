import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center p-4 bg-gray-100 dark:bg-gray-900">
      <Image src="/logo.png" alt="Project Logo" width={40} height={40} />
      <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
        My Project Name
      </h1>
    </header>
  );
}
