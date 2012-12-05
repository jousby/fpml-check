import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

  val appName = "fpml-check"
  val appVersion = "1.0-SNAPSHOT"

  val appDependencies = Seq( 
      // Add your project dependencies here,
  )

  val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
    lessEntryPoints <<= (sourceDirectory in Compile)(base ⇒ (
      (base / "assets" / "stylesheets" / "bootstrap" / "bootstrap.less") +++
      (base / "assets" / "stylesheets" / "bootstrap" / "responsive.less"))))
}
