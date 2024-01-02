/**
 * This component returns a simple paragraph
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the component
 * @returns JSX.Element
 */

function MyComponent(props:{title:string}) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>What is up!</p>
    </div>
  )
}

export default MyComponent