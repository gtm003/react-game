import React from 'react';

export default function Music({src}) {
  return (
    <audio id = "music" src = {src} loop></audio>
    )
}