import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'
import YouTubeVideo from "../Elements/YouTubeVideo" 
import VideoPlayer from "../Elements/VideoPlayer";

const sharedComponents = {
  Image,
  YouTubeVideo,
  VideoPlayer
}

const useMDXComponent = (code) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const MDXContent = ({ code, components, ...props }) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} {...props} />
}

export default MDXContent