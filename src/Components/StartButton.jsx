import {StarIcon as StarIcon1} from '@heroicons/react/24/outline';
import {StarIcon as StarIcon2} from '@heroicons/react/24/solid';

function StartButton({isFavorite , onClick}) {

    const Icon = isFavorite ? StarIcon2 : StarIcon1;
  return (
    <Icon className="h-6 w-6 text-blue-500 cursor-pointer" onClick={onClick}/>
  )
}

export {StartButton}