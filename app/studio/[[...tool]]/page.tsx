import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return (
    <div className='z-999999'>
      <NextStudio config={config} />
    </div>
  )
}
