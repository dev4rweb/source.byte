<?php
//В памяти хранятся два массива объектов - User (с public-свойством $id и $videos) и Video (c public-свойствами $id и $userId)
//, нужно построить результирующую коллекцию, где для каждого User будет установлено свойство $videos из соответствующих
// объектов Video

//class User
//{
//    public int $id;
//
//    /** @var Video[] */
//    public $videos = [];
//}
//
//class Video
//{
//    public int $userId;
//
//    public string $videoFile;
//}
//
///* @var User[] $users */
//$users = [];
///* @var Video[] $videos */
//$videos = [];
//
///**
// * @param User[] $users
// * @param Video[] $videos
// *
// * @return User[]
// **/
//function attacVideos($users, $videos)
//{
//    foreach ($videos as $video) {
//        array_push($users[$video->userId]->videos, $video);
//    }
//
//    return $users;
//}
