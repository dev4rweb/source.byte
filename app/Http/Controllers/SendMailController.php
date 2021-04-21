<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendMailController extends Controller
{
    public function index()
    {
        try {
            /*https://www.soengsouy.com/2020/10/mail-send-in-laravel-example-tutorial.html*/
            /*https://www.nicesnippets.com/blog/laravel-8-send-email-example-tutorial*/
            /*https://youtu.be/WRWk4RUt5eU*/

            $data = [

                'subject' => 'phone',
                'content' => '<div>content with text <h1>Title</h1></div>',
            ];

            Mail::send('email-template', $data, function ($message) use ($data) {
//            $message->to($user['email']);
                $message->to('webave8888@gmail.com');
                $message->subject('subject fucka');
            });

            $response['message'] = 'Email Send';
            $response['success'] = true;

            dd('Mail Send Successfully');
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function sendEmailContact(Request $request)
    {
        $view = $request['name'] ? "<p>Name - " . $request['name'] . "</p>" : "";
        $view .= $request['email'] ? "<p>Email - " . $request['email'] . "</p>" : "";
        $view .= $request['phone'] ? "<p>phone - " . $request['phone'] . "</p>" : "";
        $view .= $request['msg'] ? "<p>Message - " . $request['msg'] . "</p>" : "";

        $data = [
            'subject' => 'Contact Form',
            'content' => "<div>$view</div>"

        ];
        try {
            Mail::send('email-template', $data, function ($message) use ($data) {
//                $message->to('dev4rweb@gmail.com');
                $message->to('admin@source-byte.com');
                $message->subject($data['subject']);
            });
            $response['message'] = 'Email sent';
            $response['success'] = true;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function sendEmail(Request $submitGameForm)
    {
        $view = $submitGameForm['gameNameOne'] ? "<p>Name of you game - " . $submitGameForm['gameNameOne'] . "</p>" : "";
        $view .= $submitGameForm['gameNameTwo'] ? "<p>Your name/Company/Team - " . $submitGameForm['gameNameTwo'] . "</p>" : "";
        $view .= $submitGameForm['contactName'] ? "<p>Contact Name - " . $submitGameForm['contactName'] . "</p>" : "";
        $view .= $submitGameForm['contactEmail'] ? "<p>Email - " . $submitGameForm['contactEmail'] . "</p>" : "";
        $view .= $submitGameForm['company'] ? "<p>Company/Game Website - " . $submitGameForm['company'] . "</p>" : "";
        $view .= $submitGameForm['team'] ? "<p>Team Size - " . $submitGameForm['team'] . "</p>" : "";
        $view .= $submitGameForm['prevProject'] ? "<p>Previous Projects/Company Experience (if any) - " . $submitGameForm['prevProject'] . "</p>" : "";
        $view .= $submitGameForm['gameDesc'] ? "<p>*Game Description (summary/elevator pitch) - " . $submitGameForm['gameDesc'] . "</p>" : "";
        $view .= $submitGameForm['genre'] ? "<p>Game Genre - " . $submitGameForm['genre'] . "</p>" : "";
        $view .= $submitGameForm['similar'] ? "<p>Similar Titles - " . $submitGameForm['similar'] . "</p>" : "";
        $view .= $submitGameForm['featureOne'] ? "<p>Feature 1 - " . $submitGameForm['featureOne'] . "</p>" : "";
        $view .= $submitGameForm['featureTwo'] ? "<p>Feature 2 - " . $submitGameForm['featureTwo'] . "</p>" : "";
        $view .= $submitGameForm['featureThree'] ? "<p>Feature 3 - " . $submitGameForm['featureThree'] . "</p>" : "";
        $view .= $submitGameForm['featureFour'] ? "<p>Feature 4 - " . $submitGameForm['featureFour'] . "</p>" : "";
        $view .= $submitGameForm['featureFive'] ? "<p>Feature 5 - " . $submitGameForm['featureFive'] . "</p>" : "";
        $view .= $submitGameForm['featureSix'] ? "<p>Feature 6 - " . $submitGameForm['featureSix'] . "</p>" : "";
        $view .= $submitGameForm['uniqFeature'] ? "<p>Unique Features - " . $submitGameForm['uniqFeature'] . "</p>" : "";
        $view .= $submitGameForm['playTime'] ? "<p>Estimated Playtime Goal - " . $submitGameForm['playTime'] . "</p>" : "";

        $view .= str_contains($submitGameForm['cbxPC'], "true") ? "<p>PC - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxPS'], "true") ? "<p>PS4 - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxXBox'], "true") ? "<p>Xbox - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxSwitch'], "true") ? "<p>Switch - checked</p>" : "";

        $view .= $submitGameForm['optional'] ? "<p>Optional - " . $submitGameForm['optional'] . "</p>" : "";
        $view .= $submitGameForm['dateMonth'] ? "<p>Date - " . $submitGameForm['dateMonth'] . "</p>" : "";
        $view .= $submitGameForm['addPlatform'] ? "<p>Additional Platforms - " . $submitGameForm['addPlatform'] . "</p>" : "";
        $view .= $submitGameForm['topRisks'] ? "<p>Top Risks - " . $submitGameForm['topRisks'] . "</p>" : "";


        $view .= str_contains($submitGameForm['cbxMarketing'], "true") ? "<p>Marketing - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxQA'], "true") ? "<p>QA - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxConsole'], "true") ? "<p>Console Submission Support - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxPorting'], "true") ? "<p>Porting - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxLocalization'], "true") ? "<p>Localization - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxVoice'], "true") ? "<p>Voice Recordings - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxProduction'], "true") ? "<p>Production Support - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxGameDesign'], "true") ? "<p>Gamedesign Support - checked</p>" : "";
        $view .= str_contains($submitGameForm['cbxDevelopment'], "true") ? "<p>Development Funding - checked</p>" : "";


        $view .= $submitGameForm['uploadFile'] ? "<p><a href='http://source-byte.zzz.com.ua/lsapp/public" . $submitGameForm['uploadFile'] . "'>See upload file</a></p>" : "";
        $view .= $submitGameForm['urlUploadFile'] ? "<p><a href=" . $submitGameForm['urlUploadFile'] . ">" . $submitGameForm['urlUploadFile'] . "</a></p>" : "";
        $view .= $submitGameForm['helpList'] ? "<p>Any things you would like help with which are not part of the above list? - " . $submitGameForm['helpList'] . "</p>" : "";

        $data = [
            'subject' => 'Submit your game',
            'content' => "<div> $view </div>",
        ];

        try {
            Mail::send('email-template', $data, function ($message) use ($data) {
//            $message->to($user['email']);
//                $message->to('dev4rweb@gmail.com');
                $message->to('admin@source-byte.com');
                $message->subject($data['subject']);
            });
            $response['message'] = 'Email Send';
            $response['success'] = true;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function sendEmailJobForm(Request $jobForm)
    {
        $view = $jobForm['jobPosition'] ? "<h1>Position  - " . $jobForm['jobPosition'] . "</h1>" : "";

        $view .= $jobForm['name'] ? "<p>Name - " . $jobForm['name'] . "</p>" : "";
        $view .= $jobForm['country'] ? "<p>Country - " . $jobForm['country'] . "</p>" : "";
        $view .= $jobForm['email'] ? "<p>Email - " . $jobForm['email'] . "</p>" : "";
        $view .= $jobForm['yourSite'] ? "<p>Your Website - " . $jobForm['yourSite'] . "</p>" : "";
        $view .= $jobForm['experience'] ? "<p>Company Experience - " . $jobForm['experience'] . "</p>" : "";
        $view .= $jobForm['yourSiteTwo'] ? "<p>Your website Two - " . $jobForm['yourSiteTwo'] . "</p>" : "";

        $view .= str_contains($jobForm['unity'], "true") ? "<p>Unity Game Developer - checked</p>" : "";
        $view .= str_contains($jobForm['unreal'], "true") ? "<p>Unreal Game Developer - checked</p>" : "";
        $view .= str_contains($jobForm['design'], "true") ? "<p>3D Designer - checked</p>" : "";
        $view .= str_contains($jobForm['artist'], "true") ? "<p>Pixel Artist - checked</p>" : "";
        $view .= str_contains($jobForm['marketing'], "true") ? "<p>Marketing Specialist - checked</p>" : "";
        $view .= str_contains($jobForm['webDev'], "true") ? "<p>Web Developer - checked</p>" : "";
        $view .= str_contains($jobForm['cProgrammer'], "true") ? "<p>C# Developer - checked</p>" : "";
        $view .= str_contains($jobForm['graphicDesign'], "true") ? "<p>Graphic Designer - checked</p>" : "";
        $view .= str_contains($jobForm['writer'], "true") ? "<p>Writer - checked</p>" : "";
        $view .= str_contains($jobForm['levelDesigner'], "true") ? "<p>Level Designer - checked</p>" : "";
        $view .= str_contains($jobForm['gameDesigner'], "true") ? "<p>Game Designer - checked</p>" : "";
        $view .= str_contains($jobForm['composer'], "true") ? "<p>Composer - checked</p>" : "";
        $view .= str_contains($jobForm['other'], "true") ? "<p>Other - checked</p>" : "";

        $view .= $jobForm['impress'] ? "<p>Impress us - " . $jobForm['impress'] . "</p>" : "";
        $view .= $jobForm['earn'] ? "<p>How much you would like to earn?  - " . $jobForm['earn'] . "</p>" : "";
        $view .= $jobForm['website'] ? "<p>Your website Three - " . $jobForm['website'] . "</p>" : "";
        $view .= $jobForm['help'] ? "<p>Any things you would like help with which are not part of the abouve list - " . $jobForm['help'] . "</p>" : "";

        $view .= $jobForm['uploadFile'] ? "<p><a href='http://source-byte.zzz.com.ua/" . $jobForm['uploadFile'] . "'>See upload file</a></p>" : "";

        $data = [
            'subject' => 'Apply Job!',
            'content' => "<div> $view </div>",
        ];

        try {
            Mail::send('email-template', $data, function ($message) use ($data) {
//            $message->to($user['email']);
//                $message->to('dev4rweb@gmail.com');
                $message->to('admin@source-byte.com');
                $message->subject($data['subject']);
            });
            $response['message'] = 'Email Send';
            $response['success'] = true;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
