package com.yourlian.rndemoapp;

import com.facebook.react.ReactActivity;

// 控制旋转
import android.content.Intent; 
import android.content.res.Configuration; 
// 启动页
import org.devio.rn.splashscreen.SplashScreen; 

import android.os.Bundle;
import com.umeng.analytics.MobclickAgent;
import com.umeng.analytics.MobclickAgent.EScenarioType;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rndemoapp";
    }

    // 禁止旋转
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
      super.onConfigurationChanged(newConfig);
      Intent intent = new Intent("onConfigurationChanged");
      intent.putExtra("newConfig", newConfig);
      this.sendBroadcast(intent);
    }

    // 友盟统计
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // 显示启动页
        SplashScreen.show(this); 
        super.onCreate(savedInstanceState);
        MobclickAgent.setSessionContinueMillis(1000);
        MobclickAgent.setScenarioType(this, EScenarioType.E_DUM_NORMAL);
    }

    @Override
    public void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);
    }
    @Override
    protected void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }
}
