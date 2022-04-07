import './App.css';

export default function App() {
  return (
    <div class='center-container frosted-glass'>
      <div class='flex-column'>
        <div class='round-profile-pic'>
          <img src='/avatar.jpeg' />
        </div>
        <a href='http://instagram.com/maxevilmind' class="mt-4 bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-white rounded">
          Instagram
        </a>
        <a href='https://t.me/evilscience' class="mt-4 bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-white rounded">
          Telegram Channel
        </a>
        <a href='https://open.spotify.com/artist/3mcJ5jST3NUQocI0na1IaX' class="mt-4 bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-white rounded">
          Spotify
        </a>
        <a href='https://github.com/maxevilmind' class="mt-4 bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-white rounded">
          GitHub
        </a>
        <a href='https://www.linkedin.com/feed/' class="mt-4 bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-white rounded">
          LinkedIn
        </a>
      </div>
    </div>
  )
}
