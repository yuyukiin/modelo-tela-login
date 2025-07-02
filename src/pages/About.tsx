import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <p>About</p>
      <Link to="/">Home</Link>
      <Link to="/about/info">Info</Link>
    </div>
  )
}
